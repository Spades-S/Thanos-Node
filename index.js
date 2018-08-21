// Created by Spades<spadesge@gmail.com> on 18/08/21

const fs = require('fs')
const path = require('path')

function remove(toDelete) {
    const isFile = fs.lstatSync(toDelete).isFile()
    if (isFile) {
        fs.unlinkSync(toDelete)
    } else {
        const files = fs.readdirSync(toDelete)
        files.forEach(item => {
            remove(path.join(toDelete, item))
        })
        fs.rmdirSync(toDelete)
    }

}

const PathToDelete = process.argv.splice(2)[0] || './'

const files = fs.readdirSync(PathToDelete)
const Length = files.length

for (let i = 0; i < Length / 2; i++) {
    const index = Math.floor(Math.random() * files.length)
    const fileToDelete = files.splice(index, 1)[0]
    remove(path.join(PathToDelete, fileToDelete))
}