// const NotesService = {
//     getAllNotes(knex) {
//         return knex.select('*').from('noteful_notes')
//     },

//     insertNotes(knex, newNotes) {
//         return knex
//         .insert(newNotes)
//         .into('noteful_notes')
//         .returning('*')
//         .then(rows => {
//             return rows[0]
//         })
//     },

//     getById(knex, id)  {
//         return knex
//         .from('noteful_notes')
//         .select('*')
//         .where('id', id).first()
//     },

//     deleteNotes(knex, id) {
//         return knex('noteful_notes')
//         .where({id})
//         .delete()
//     },

//     updateNote(knex, id, newNoteFields) {
//         return knex('noteful_notes')
//         .where({id})
//         .update(newNoteFields)
//     },
// }

// module.exports = NotesService