import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950 text-gray-50 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Careers
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Blog
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Web Design
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Web Development
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              SEO Optimization
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Consulting
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Email
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Phone
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Address
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Social Media
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            &copy; 2024 Acme Web. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
