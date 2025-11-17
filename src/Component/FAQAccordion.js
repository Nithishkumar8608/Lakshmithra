import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-bottom">
      <button
        className="w-100 d-flex justify-content-between align-items-center py-4 bg-transparent border-0 text-start"
        onClick={onToggle}
      >
        <h5 className="mb-0 fw-semibold pe-3">{question}</h5>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} className="text-primary flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted pb-4 mb-0">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;
