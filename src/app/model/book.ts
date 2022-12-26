export class Book {
  _id: number;
  title: string;
  description: string;
  author: string;
  link: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.title = (obj && obj.title) || '';
    this.description = (obj && obj.description) || '';
    this.author = (obj && obj.author) || '';
    this.link = (obj && obj.link) || '';
  }
}
