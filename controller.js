module.exports = {

  getShelves: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    dbInstance.get_shelves()
      .then( shelves => {
        res.status(200).send(shelves);
      })
      .catch( err => {
        res.status(500).send(err)
      })
  },

  getBins: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { shelfLetter } = req.params

    dbInstance.get_bins({shelfLetter})
      .then( bins => {
        res.status(200).send( bins );
      })
      .catch( err => {
        res.status(500).send(err);
      })

  },

  getBin: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    let { shelfLetter } = req.params
    const binNumber = shelfLetter[1];
    shelfLetter = shelfLetter[0];
    console.log(shelfLetter)

    dbInstance.get_bin({shelfLetter, binNumber})
      .then( bin => {
        res.status(200).send( bin );
      })
      .catch( err => {
        res.status(500).send(err);
      })

  },

  updateBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let { id } = req.params
    let binNumber = id[1];
    let shelfLetter = id[0];
    let { binName, binPrice } = req.body

    dbInstance.update_bin({shelfLetter, binNumber, binName, binPrice})
      .then( () => {res.send()})
      .catch(err => { res.status(500).send(err);})
  },

  deleteBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let { id } = req.params
    let binNumber = id[1];
    let shelfLetter = id[0];

    dbInstance.delete_bin({shelfLetter, binNumber})
      .then(() => {res.send()})
      .catch(err => { res.status(500).send(err);})

  },

  addBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let { id } = req.params
    let binNumber = id[1];
    let shelfLetter = id[0];
    let { binName, binPrice } = req.body
    dbInstance.add_bin({shelfLetter, binNumber, binName, binPrice})
      .then( () => {res.send()})
      .catch(err => { res.status(500).send(err);})

  }
}
