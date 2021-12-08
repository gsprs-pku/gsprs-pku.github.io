---
layout: page
title: Activities
permalink: /activities/
---
<meta charset="utf-8">
<link rel="stylesheet" href="fullcalendar/lib/main.css">
<script src="fullcalendar/lib/main.js"></script>

<script>
    $(document).ready(function(){$('#calendar').fullCalendar({
		 events:'{{site.url}}/calendar-data/'
	     })
    });
</script>

<!--
{% for event in site.events %}
{{event.title}} {{event.event_date}}<br/>
{% endfor %}
-->

<div id="calendar"></div>

<br>
<br>
<br>
<br>