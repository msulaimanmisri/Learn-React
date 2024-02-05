function Footer() {
    return (
        <div className="container mt-5">
            <span className="form-text text-muted">
                &copy; {new Date().getFullYear()} - Basic React
            </span>
        </div>
    )
}

export default Footer;