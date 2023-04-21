
test('renders App without crashing', () => {
	const div = document.createElement('div');
	createRoot(div).render(<Provider store={store}>{routing}</Provider>);
	expect(div.querySelector('main')).toBeInTheDocument();
	expect(div.querySelector('header')).toBeInTheDocument();
	expect(div.querySelector('footer')).toBeInTheDocument();
	createRoot(div).unmount();
  });
  test('renders Home component on / route', () => {
	const { getByText } = render(<Provider store={store}><Router><Home /></Router></Provider>);
	expect(getByText('Welcome to our Store!')).toBeInTheDocument();
  });
  test('renders Product component on /products route', () => {
	const { getByText } = render(<Provider store={store}><Router><Product /></Router></Provider>);
	expect(getByText('Our Products')).toBeInTheDocument();
  });
  test('renders ContactUs component on /contact route', () => {
	const { getByText } = render(<Provider store={store}><Router><ContactUs /></Router></Provider>);
	expect(getByText('Contact Us')).toBeInTheDocument();
  });
  