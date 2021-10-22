// const { bucket, getArticleByName } = require('./index');
const importedStuff = require('./index');

jest.mock('./index', () => ({
  bucket: {
    file: {
      download: jest.fn(),
    },
  },
}));

describe('getArticleByName', () => {
  describe('given a name of an article that exists', () => {
    fit('should return the article body', async () => {
      bucket.file.download.mockResolvedValue({0: "mock body"});
      expect((await importedStuff.getArticleByName("mock name")).body).toBe("mock body");
    });

    it('should return the article gist', () => {

    });

    it('should return the article metadata', () => {

    });

    it('should return the article citations', () => {

    });
  });

  describe('given a name of an article that does not exist', () => {
    it('should throw an error that explains the article could not be found', () => {

    });
  });

  describe('when something goes wrong with the bucket API calls', () => {
    it('should throw an error that explains something went wrong with the bucket API calls', () => {

    });
  });
});