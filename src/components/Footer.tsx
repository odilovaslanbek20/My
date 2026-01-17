export default function Footer() {
    return (
        <footer className="web-container pb-6 max-[810px]:pb-25 max-[600px]:pb-20 border-t border-[#D5FF3F] pt-6">
            <p className="text-center text-white/50 text-sm">
                &copy; {new Date().getFullYear()} Aslanbek Odilov. All rights reserved.
            </p>
        </footer>
    )
}