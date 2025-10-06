'use client'

import { Calendar } from "@heroui/react";
import { today, getLocalTimeZone, isWeekend, DateValue } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { Modal, ModalContent, ModalBody, Select, SelectItem } from "@heroui/react";
import { useState, forwardRef } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

interface CalendarProps {
  onChange?: (date: DateValue, time?: string) => void;
  label?: string;
  value?: DateValue | null;
  selectedTime?: string;
}

const timeSlots = Array.from({ length: 33 }, (_, i) => {
  const hour = Math.floor(i / 4) + 9;
  const minute = (i % 4) * 15;
  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  return { value: time, label: `${time}` };
});

const CalendarPicker = forwardRef<HTMLDivElement, CalendarProps>(
  ({ onChange, label = "Select Date", value, selectedTime }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState(selectedTime);
    const {locale} = useLocale(); 
  
    const isDateUnavailable = (date: DateValue) =>
      isWeekend(date, locale);

    const handleDateSelect = (date: DateValue) => {
      onChange?.(date, time);
      setIsOpen(false);
    };

    const handleTimeSelect = (newTime: string) => {
      setTime(newTime);
      if (value) {
        onChange?.(value, newTime);
      }
      setIsOpen(false);
    };

    const formatDate = (date: DateValue | null | undefined) => {
      if (!date) return '';
      const formattedDate = new Date(date.toString()).toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      return time ? `${formattedDate} at ${time}` : formattedDate;
    };

    return (
      <div className="space-y-2.5 w-full" ref={ref}>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center w-full border rounded-md p-3 cursor-pointer hover:border-primary transition-colors"
        >
          <CalendarIcon className="h-5 w-5 mr-2 text-gray-500" />
          <span className="text-sm">
            {value ? formatDate(value) : "Select a date and time"}
          </span>
        </div>

        <Modal 
          size="lg"
          isOpen={isOpen} 
          onOpenChange={setIsOpen}
          placement="center"
          classNames={{
            base: "max-w-fit m-auto",
            backdrop: "bg-black/50",
            wrapper: "items-center",
          }}
        >
          <ModalContent>
            <ModalBody className="p-6">
              <div className="space-y-4">
                <Calendar 
                  aria-label={label} 
                  isDateUnavailable={isDateUnavailable}
                  onChange={handleDateSelect}
                  minValue={today(getLocalTimeZone())}
                  value={value}
                  className="rounded-lg"
                />
                
                <div className="flex items-center space-x-2 pt-4 mt-2 border-t">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <Select
                    label="Select Time"
                    placeholder="Choose a time"
                    className="max-w-xs"
                    selectedKeys={time ? [time] : []}
                    onChange={(e) => handleTimeSelect(e.target.value)}
                  >
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    );
  }
);

CalendarPicker.displayName = 'CalendarPicker';

export default CalendarPicker;
