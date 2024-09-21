const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-[100vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
            {children}
        </div>
    )
}

export default AuthLayout;