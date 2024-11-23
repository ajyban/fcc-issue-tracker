'use strict';
const mongoose = require('mongoose');
module.exports = function (app) {

  const issueSchema = new mongoose.Schema({
    project: { type: String, required: true, index: true },
    issue_title: String,
    issue_text: String,
    created_on: Date,
    updated_on: Date,
    created_by: String,
    assigned_to: String,
    open: Boolean,
    status_text: String
  });

  const Issue = mongoose.model('Issue', issueSchema);

  const issue_visible_fields = [
    'issue_title',
    'issue_text',
    'created_by',
    'assigned_to',
    'status_text',
    'open'
  ];

  const issue_all_fields_list = issue_visible_fields.concat(['_id', 'created_on', 'updated_on']);

  app.route('/api/issues/:project')
    .get(function (req, res) {
      let project = req.params.project;
      let query = { project: project };
      issue_all_fields_list.forEach(field => {
        if (field in req.query) {
          query[field] = req.query[field];
        }
      });
      Issue.find(query)
        .then((issues) => res.json(issues))
        .catch(console.error)
    })

    .post(function (req, res) {
      let project = req.params.project;
      console.log(`POST triggerd for project = ${project}`);
      const {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text
      } = req.body;
      if (!issue_text || !issue_title || !created_by) {
        console.log(`POST ${project} required field(s) missing`);
        return res.json({ error: 'required field(s) missing' });
      }
      const newIssue = new Issue({
        project: project,
        issue_title: issue_title,
        issue_text: issue_text,
        created_on: new Date(),
        updated_on: new Date(),
        created_by: created_by,
        assigned_to: assigned_to || '',
        status_text: status_text || '',
        open: true
      });
      newIssue.save()
        .then((result) => res.json(result.toJSON()))
        .catch(console.error)
    })

    .put(function (req, res) {
      const project = req.params.project;
      const id = req.body._id;
      const {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
        open
      } = req.body;
      console.log(`PUT triggerd for project = ${project}`);
      if (!id) {
        console.log(`missing _id`);
        return res.json({ error: 'missing _id' });
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(`could not update 91`);
        return res.json({ error: 'could not update', _id: id });
      }

      let update = {};
      let count = 0;
      issue_visible_fields.forEach(field => {
        if (field in req.body) {
          update[field] = req.body[field];
          count++;
        }
      });

      if (!count) {
        console.log(`no update field(s) sent`);
        return res.json({ error: 'no update field(s) sent', _id: id });
      }
      const updatedIssue = {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
        open,
        updated_on: new Date()
      };
      Issue.findById(id)
        .then((issueFound) => {
          console.log('issueFound' + issueFound)
          if (!issueFound) {
            return res.json({ error: 'could not update', _id: id });
          } else {
            Issue.updateOne({ project, _id: id }, updatedIssue)
              .then((result) => {
                // id not found
                if (!result || result.nModified === 0 || result.n === 0) {
                  console.log(`could not update . id not found`);
                  return res.json({ error: 'could not update', _id: id });
                }
                // Success!
                console.log(`successfully updated`);
                return res.json({ result: 'successfully updated', _id: id });
              })
              .catch(console.error)
          }
        })
        .catch(console.error)

    })

    .delete(function (req, res) {
      let project = req.params.project;
      let id = req.body._id;
      console.log(`DELETE triggerd for project = ${project}`);
      if (!id) {
        return res.json({ error: 'missing _id' });
      }
      Issue.deleteOne({ project, _id: id }).then(result => {
        if (result.deletedCount === 1) {
          return res.json({ result: 'successfully deleted', _id: id });
        } else {
          return res.json({ error: 'could not delete', _id: id });
        }
      }).catch(console.error);
    });
};
