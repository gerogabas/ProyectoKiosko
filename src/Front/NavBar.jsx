const textWhiteHoverZinc300 = 'text-white hover:text-zinc-300';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-purple-800 rounded-full fixed top-0 left-0 right-0 z-10">
            <div className="ml-4">
                <a href="/" className={textWhiteHoverZinc300}>Home</a>
            </div>
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search..." className="rounded-full p-2" />
                <a href="/materias" className={textWhiteHoverZinc300}>Materias</a>
                <a href="#" className={textWhiteHoverZinc300}>About</a>
                <a href="#" className={textWhiteHoverZinc300}>Contact</a>
                <a href="/logIn">
                    <button className="bg-white text-purple-800 py-2 px-4 rounded-full hover:bg-purple-700 hover:text-white">Login</button>
                </a>
            </div>
        </nav>
    );
}
export default Navbar;