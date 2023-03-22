/* eslint-disable max-len */
pm.test('response status code should have 200 value', () => {
  pm.response.to.have.status(200);
});

pm.test('response status code should have 400 value if the user is not filling the name', () => {
  pm.response.to.have.status(400);
});

pm.test('response Content-Type header should have application/json value', () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});

pm.test('response body should be an object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});

pm.test('response body should have correct property and value', () => {
  const responseJson = pm.response.json();
  const checkStatus = pm.response.code == 200 ? true : false;

  if (checkStatus) {
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('Buku berhasil diperbarui');
  } else {
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('fail');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('Gagal memperbarui buku. Mohon isi nama buku');
  }
});

pm.test('when request the updated book', () => {
  const bookId = pm.environment.get('bookId');
  pm.sendRequest(`http://localhost:9000/books/${bookId}`, (error, response) => {
    if (!error) {
      pm.test('then the updated book should contain the latest data', () => {
        const responseJson = response.json();
        const {data: {book}} = responseJson;

        const expectedId = pm.environment.get('bookId');
        const expectedName = 'Buku A Revisi';
        const expectedYear = 2011;
        const expectedAuthor = 'Jane Doe';
        const expectedSummary = 'Lorem Dolor sit Amet';
        const expectedPublisher = 'Dicoding';
        const expectedPageCount = 200;
        const expectedReadPage = 26;
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
        pm.expect(book).to.have.ownProperty('pageCount');
        pm.expect(book.pageCount).to.equals(expectedPageCount);
        pm.expect(book).to.have.ownProperty('readPage');
        pm.expect(book.readPage).to.equals(expectedReadPage);
      });
    }
  });
});
