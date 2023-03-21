/* eslint-disable max-len */
pm.test('response status code should have 200 value', () => {
  pm.response.to.have.status(200);
});
pm.test('response Content-Type header should have application/json value', () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});

pm.test('response body should be an object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});
pm.test('response body should have the correct property and value', () => {
  const responseJson = pm.response.json();

  pm.expect(responseJson).to.have.ownProperty('status');
  pm.expect(responseJson.status).to.equals('success');
  pm.expect(responseJson).to.have.ownProperty('data');
  pm.expect(responseJson.data).to.be.an('object');
});

pm.test('response body data should contain book object', () => {
  const responseJson = pm.response.json();
  const {data} = responseJson;

  pm.expect(data).to.have.ownProperty('book');
  pm.expect(data.book).to.be.an('object');
});

pm.test('note object should contain correct value for id, title, body, and tags property', () => {
  const responseJson = pm.response.json();
  const {data: {book}} = responseJson;
  const expectedId = pm.environment.get('bookId');
  const expectedName = 'Buku A';
  const expectedYear = 2010;
  const expectedAuthor = 'John Doe';
  const expectedSummary = 'Lorem ipsum dolor sit amet';
  const expectedPublisher = 'Dicoding Indonesia';
  pm.expect(book).to.have.ownProperty('id');
  pm.expect(book.id).to.equals(expectedId);
  pm.expect(book).to.have.ownProperty('name');
  pm.expect(book.name).to.equals(expectedName);
  pm.expect(book).to.have.ownProperty('year');
  pm.expect(book.year).to.eql(expectedYear);
  pm.expect(book).to.have.ownProperty('summary');
  pm.expect(book.summary).to.equals(expectedSummary);
  pm.expect(book).to.have.ownProperty('author');
  pm.expect(book.author).to.equals(expectedAuthor);
  pm.expect(book).to.have.ownProperty('publisher');
  pm.expect(book.publisher).to.equals(expectedPublisher);
});
