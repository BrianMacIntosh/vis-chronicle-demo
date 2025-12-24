const { Timeline } = require("vis-timeline")
const { DataSet } = require("vis-data")
import 'vis-timeline/styles/vis-timeline-graph2d.css'
import 'vis-chronicle/styles/style.css'
import './style.css'
const timelineData = require("../intermediate/timeline.json")

var container = document.getElementById("visualization")

var groups = new DataSet(timelineData.groups)
var items = new DataSet(timelineData.items)
var options = timelineData.options
var timeline = new Timeline(container, items, groups, options)
