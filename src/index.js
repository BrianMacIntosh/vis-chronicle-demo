const { Timeline } = require("vis-timeline")
const { DataSet } = require("vis-data")
const moment = require('moment')
import 'vis-timeline/styles/vis-timeline-graph2d.css'
import 'vis-chronicle/styles/style.css'
import './style.css'
const timelineData = require("../intermediate/timeline.json")

var container = document.getElementById("visualization")

timelineData.groups[0].subgroupOrder = function(a, b)
{
	//TODO: what determines which subgroup event is passed?
	return moment(a.start).valueOf() - moment(b.start).valueOf()
}

var groups = new DataSet(timelineData.groups)
var items = new DataSet(timelineData.items)
var options = timelineData.options
var timeline = new Timeline(container, items, groups, options)
