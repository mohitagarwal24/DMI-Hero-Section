import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-lovable-red/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand Icon */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="relative p-4 bg-gradient-to-r from-lovable-red/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-8 h-8 text-lovable-red" />
              <motion.div
                className="absolute inset-0 bg-lovable-red/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-inter font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Design Made{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-lovable-red to-pink-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Intelligent
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter font-light"
            variants={itemVariants}
          >
            From brand kit to launch-ready content, websites & apps — powered by AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-lovable-red text-white font-inter font-semibold rounded-xl overflow-hidden min-w-[180px] flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-lovable-red to-red-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Try the Demo
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              className="group px-8 py-4 bg-white/10 text-white font-inter font-semibold rounded-xl border border-white/20 backdrop-blur-sm min-w-[180px] flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-8 hidden lg:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-3 h-3 bg-lovable-red rounded-full opacity-60"></div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-12 hidden lg:block"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/4 hidden lg:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-4 h-4 bg-purple-400 rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;