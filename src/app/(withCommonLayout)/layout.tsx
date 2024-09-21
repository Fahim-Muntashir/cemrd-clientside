import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar /> {children}
                <Footer />
            </div>
        </div>
    );
};

export default CommonLayout;