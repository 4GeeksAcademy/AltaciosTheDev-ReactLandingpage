import React from "react"

export default function Footer() {
    const styles={
        color: "white"
    }

    return (
    <nav className="container-fluid mt-4 p-5 fs-6 fw-light bg-dark" style={styles}>
        <div className="row">
            <p>Copyright @ React Nice Wallpapers 4geeks.com</p>
        </div>
    </nav>
  );
}
