const path = require('path')
const express = require('express')
const xss = require('xss')
const FoldersService = require('./folders-service')

const foldersRouter = express.Router()
const jsonParser = express.json()

const serializeFolder = folder => ({
  id: folder.id,
  folder_name: xss(folder.folder_name)
})  

foldersRouter
    .route('/api/notes')
    .get((req, res, next) => {
        const knexInstance = req.app.get ('db')
        FoldersService.getAllFolders(knexInstance)
        .then(folders => {
            res.json(folders.map(serializeFolders))
        })
        .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const {folder_name} = req.body
        const newFolder = {folder_name}

        for (const [key, value] of Object.entries(newFolder))
            if (value == null)
            return res.status(400).json({
                error: {message: `Missing ${key} in request body`}
            })

    FoldersService.insertFolder(
        req.app.get('db'),
        newFolder
    )
    .then(folder => {
        res
        .status(201)
        .location(path.posix.join(req.originalUrl, `/${folder.id}`))
        .json(serializeFolder(folder))
    })
        .catch(next)
    })
