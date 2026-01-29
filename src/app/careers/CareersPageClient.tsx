// 'use client'
// import { motion } from 'framer-motion'
// import { Briefcase, Heart, Zap, GraduationCap, Users, Calendar } from 'lucide-react'
// import Card from '@/components/shared/Card'
// import TeamCollage from '@/components/features/TeamCollage'
// const benefits = [
//   {
//     title: 'Competitive Salary',
//     description: 'We offer industry-leading compensation packages to attract and retain top talent.',
//     icon: Briefcase,
//   },
//   {
//     title: 'Company Events',
//     description: 'We host regular company events to foster a strong company culture and team bonding.',
//     icon: Heart,
//   },
//   {
//     title: 'Growth & Development',
//     description: 'Continuous learning opportunities and career advancement paths.',
//     icon: GraduationCap,
//   },
//   {
//     title: 'Fast-Paced Environment',
//     description: 'Work on challenging projects that make a real impact.',
//     icon: Zap,
//   },
//   {
//     title: 'Great Culture',
//     description: 'Join a diverse, inclusive team that values collaboration and innovation.',
//     icon: Users,
//   },
//   {
//     title: 'Regular Incentives and game days',
//     description: 'We host regular office events to foster a strong company culture and team bonding.',
//     icon: Heart,
//   },
//   {
//     title: 'No Weekends or Bank Holidays',
//     description: 'We believe in work-life balance and encourage our employees to take time off to recharge and enjoy their lives.',
//     icon: Calendar,
//   },
//   {
//     title: 'Realistic opportunities to progress in within the company',
//     description: 'We offer realistic opportunities for our employees to progress in within the company.',
//     icon: Briefcase,
//   },
//   {
//     title: 'Early finish and dress down Fridays',
//     description: 'We believe in work-life balance and encourage our employees to take time off to recharge and enjoy their lives.',
//     icon: Calendar,
//   }
// ]

// export default function CareersPage() {
//   return (
//     <main className="min-h-screen pt-28">
//       <section className="pt-24 pb-0 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center max-w-3xl mx-auto mb-12"
//           >
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//               Join Our <span className="text-[#3faa4e]">Team</span>
//             </h1>
//             <p className="mt-6 text-lg text-gray-600">
//               Build your career with us and be part of something extraordinary. We&apos;re always looking for talented individuals to join our team.
//             </p>
//           </motion.div>
        
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <div className="max-w-4xl mx-auto">
//               <TeamCollage />
//               <p className="mt-6 text-lg text-gray-600">
//                 At Ecosave, we believe in creating a supportive and inclusive workplace where everyone can thrive. From team events to mental health initiatives, we&apos;re committed to making work an enjoyable and fulfilling experience.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Work With Us</h2>
//             <p className="mt-4 text-lg text-gray-600">
//               We offer more than just a job - we offer a career with growth opportunities
//             </p>
//           </motion.div>
//           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {benefits.map((benefit) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full p-6 flex flex-col items-center text-center">
//                   <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
//                     <benefit.icon className="h-6 w-6 text-[#3faa4e]" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {benefit.description}
//                   </p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>



//       <section className="py-16 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Apply?</h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Take the first step towards your next career opportunity
//               <br />
//               <br />
//               <br />
//               <br />
//               <span className="text-3xl font-semibold block my-4">
//                 Apply directly via <a className="text-[#3faa4e] hover:underline" href="https://uk.indeed.com/cmp/Ecosave-Gas-and-Power" target="_blank" rel="noopener noreferrer">Indeed</a>
//               </span>
              
//               <a>Alternatively</a>
//               <br />
//               Send your CV and cover letter to <a className="text-[#3faa4e]" href="mailto:careers@ecosavegasandpower.com">careers@ecosavegasandpower.com</a>
//               </p>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// } 