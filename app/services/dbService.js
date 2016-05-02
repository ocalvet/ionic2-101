var PouchDB = require('pouchdb');

export class DBService {
  constructor() {
    
    this.db = new PouchDB('fr');

    let options = {
      live: true,
      retry: true,
      continuous: true,
      ajax: {withCredentials: false}
    };

    this.db.sync('http://192.168.1.103:5984/fr', options);

  }

  addDocument(doc) {
    this.db.put(doc);
  }

  getDocuments() {
    return new Promise(resolve => {
      this.db.allDocs({ include_docs: true })
        .then((result) => {
          this.data = [];
          console.log('docs from db', result);

          let docs = result.rows.map((row) => {
            this.data.push(row.doc);
            resolve(this.data);
          });

          this.db.changes({ live: true, since: 'now', include_docs: true })
            .on('change', (change) => {
              this.handleChange(change);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
  }

  handleChange(change) {
    let changedDoc = null;
    let changedIndex = null;
    console.log('change called', change);

    this.data.forEach((doc, index) => {
      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }
    });

    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    } else {
      if (changedDoc) {
        this.data[changedIndex] = change.doc;
      } else {
        this.data.push(change.doc);
      }
    }
  }
}
