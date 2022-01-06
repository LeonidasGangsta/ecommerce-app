const Layout = ({ children }) => {
  return (
    <>
      <header>
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
