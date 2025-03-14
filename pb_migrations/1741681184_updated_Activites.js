/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1569729562",
    "hidden": false,
    "id": "relation3226342881",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("relation3226342881")

  return app.save(collection)
})
