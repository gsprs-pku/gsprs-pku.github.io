---
layout: page
title: Activities
permalink: /activities/
---

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="/scripts/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.print.css">
<style>
   .fc-month-view span.fc-title{
         white-space: normal;
   }
</style>

<script>
$(document).ready(function() {

	$('#calendar').fullCalendar({
        contentHeight:'auto',//remove scrollbar, the upper "white-space" enable the title to wrap when it's too long
        events:'/calendar-data'
	})

});

</script>

<div id="calendar"></div>

<br>
<br>
<br>
<br>