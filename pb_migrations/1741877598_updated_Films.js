/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2587126364",
    "maxSelect": 1,
    "name": "Field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Choices (Film",
      "Documentaire)"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("select2587126364")

  return app.save(collection)
})
