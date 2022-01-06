const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-black text-white">
        Hi I&apos;m the header
      </header>
      <main>
        {children}
      </main>
      <footer>
        Hi, I&apos;m the footer
      </footer>
    </>
  )
};

export default Layout;
