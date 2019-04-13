const path = require('path')
const express = require('express')
const xss = require('xss')
const FoldersService = require('./folders-service')

const foldersRouter = express.Router()
const jsonParser = express.json()

const serializeComment = comment => ({
  id: folder.id,
  folder_name: xss(folder.folder_name)
})  

foldersRouter