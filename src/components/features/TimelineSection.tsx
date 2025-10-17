'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Database, Shield, Star, Package } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const timelineData: TimelineEvent[] = [
  {
    year: '2009',
    title: 'The Beginning',
    description: 'Ecosave began operation as a family start-up on a mission to save small businesses money on their energy bills.',
    icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2011',
    title: 'New Location',
    description: 'The company relocated to improved premises in Manchester city centre.',
    icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2013 - 2018',
    title: 'Growth Period',
    description: 'Built amazing relationships with customers and suppliers while assembling our exceptional team.',
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2019 - 2020',
    title: 'Digital Innovation',
    description: 'Invested significantly in integrated and automated systems, implemented digital signature technology, and strengthened the team with experienced technology professionals',
    icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2020 - 2021',
    title: 'Resilience Through COVID',
    description: 'Helped customers identify savings opportunities during the pandemic without compromising on service.',
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2022',
    title: 'Milestone Achievement',
    description: 'Reached 5000 reviews on Trustpilot while maintaining a 4.9 rating, helping clients navigate the energy crisis.',
    icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />
  },
  {
    year: '2022 - 2024',
    title: 'Service Expansion',
    description: 'Introduced new services including Waste, Water, Card Machines, Boilers, Financial Support, and more.',
    icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 md:block"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.8 }}
          />
          
          {timelineData.map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex flex-col md:flex-row items-start md:items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Content */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <motion.div 
                  className={`p-6 bg-white rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 md:p-4 bg-emerald-100 rounded-lg flex-shrink-0 mt-1">
                      {event.icon}
                    </div>
                    <div>
                      <span className="text-emerald-600 font-bold text-lg md:text-xl">
                        {event.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold mt-2">{event.title}</h3>
                      <p className="text-gray-600 mt-2 text-md md:text-base">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Circle marker */}
              <div className="absolute left-0 md:static w-8 md:w-2/12 flex justify-center">
                <motion.div 
                  className="w-4 h-4 bg-emerald-600 rounded-full relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.2,
                    delay: index * 0.1 + 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                />
              </div>

              {/* Empty space */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;