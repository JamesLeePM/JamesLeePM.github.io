import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        style={{ textAlign: "center" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-600">
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}
