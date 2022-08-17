const App2 = () => {
  return (
    <React.Fragment>
      {/* App Hero (Navbar and first look with image) */}
      <HeroComp />

      {/* shelf want to read */}
      <BookShelf shelfTitle={"Want To Read"} bookList={[1, 2, 3]} />

      {/* shelf Currently Reading */}
      <BookShelf shelfTitle={"Currently Reading"} bookList={[1, 2, 3]} />

      {/* shelf Read */}
      <BookShelf shelfTitle={"Read"} bookList={[1, 2, 3]} />

      {/* Footer */}
      <FooterComp />

      {/* search Button */}
      <SearchBtn />
    </React.Fragment>
  );
};

export default App2;
