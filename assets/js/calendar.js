var facebookEvents = [{"title":"BC AGM","start":"2016-06-28 20:00:00","url":"https:\/\/www.facebook.com\/278227962530733","end":"2016-06-28 22:00:00"},{"title":"15-05: Friendly at the VUB!","start":"2016-05-15 15:00:00","url":"https:\/\/www.facebook.com\/1623695974623268"},{"title":"30-01: Rugby at the VUB!","start":"2016-04-30 15:00:00","url":"https:\/\/www.facebook.com\/538973486285649"},{"title":"24-04: Rugby at the VUB!","start":"2016-04-24 13:00:00","url":"https:\/\/www.facebook.com\/1544458499183659"},{"title":"17-04: Rugby at the VUB!","start":"2016-04-17 15:00:00","url":"https:\/\/www.facebook.com\/1726788587589621"},{"title":"09-04: Rugby at the VUB - touring team!","start":"2016-04-09 13:00:00","url":"https:\/\/www.facebook.com\/945836712167665"},{"title":"20-03: Rugby at the VUB!","start":"2016-03-20 15:00:00","url":"https:\/\/www.facebook.com\/907412436040282"},{"title":"19-03: Rugby at the VUB!","start":"2016-03-19 13:00:00","url":"https:\/\/www.facebook.com\/809161515856927"},{"title":"13-02: Rugby at the VUB!","start":"2016-03-13 15:00:00","url":"https:\/\/www.facebook.com\/1541013619562119"},{"title":"12\/03: Rugby at the VUB!","start":"2016-03-12 15:00:00","url":"https:\/\/www.facebook.com\/974652449271115"},{"title":"Cup Game at the VUB!","start":"2016-02-20 12:30:00","url":"https:\/\/www.facebook.com\/464925340372459"},{"title":"BCarnaval","start":"2016-02-12 22:00:00","url":"https:\/\/www.facebook.com\/1561096217515336"},{"title":"31-01: Rugby at the VUB!","start":"2016-01-31 15:00:00","url":"https:\/\/www.facebook.com\/1680371768890122"},{"title":"30-01: Rugby at the VUB!","start":"2016-01-30 13:30:00","url":"https:\/\/www.facebook.com\/553479874808223"},{"title":"BC Christmas Party!","start":"2015-12-12 20:00:00","url":"https:\/\/www.facebook.com\/899418280141394"},{"title":"06-12: Rugby at the VUB!","start":"2015-12-06 15:00:00","url":"https:\/\/www.facebook.com\/1503400299956766"},{"title":"05-12: Cup game at the VUB!","start":"2015-12-05 15:00:00","url":"https:\/\/www.facebook.com\/1499957833634069"},{"title":"29-11: Rugby at the VUB!","start":"2015-11-29 13:00:00","url":"https:\/\/www.facebook.com\/1648091325461055"},{"title":"28-11: Rugby at the VUB!","start":"2015-11-28 15:00:00","url":"https:\/\/www.facebook.com\/320714634765890"},{"title":"14-11: Rugby at the VUB!","start":"2015-11-14 15:00:00","url":"https:\/\/www.facebook.com\/544719385693028"},{"title":"BC Halloween","start":"2015-10-31 13:00:00","url":"https:\/\/www.facebook.com\/2038272649720117"},{"title":"24-10: Rugby at the VUB!","start":"2015-10-25 13:00:00","url":"https:\/\/www.facebook.com\/917311448362371"},{"title":"18-10: Rugby at the VUB!","start":"2015-10-18 13:00:00","url":"https:\/\/www.facebook.com\/740489736082872"},{"title":"11-10: Cup game at the VUB! BBRFC Celtic 1 v Kituro","start":"2015-10-11 15:00:00","url":"https:\/\/www.facebook.com\/149736165377451"},{"title":"10-10: Rugby at the VUB!","start":"2015-10-10 13:00:00","url":"https:\/\/www.facebook.com\/956482391072736"}]
;

jQuery( document ).ready(function( $ ) {
  // Function to decide which calendar to show

  function chooseCalendar() {
    if (location.pathname.indexOf('women') != -1) {
      return womenCalendars;
    } else if (location.pathname.indexOf('men') != -1) {
      return menCalendars;
    } else if (location.pathname.indexOf('touch') != -1) {
      return touchCalendars;
    } else if (location.pathname.indexOf('school') != -1) {
      return schoolCalendars
    } else {
      return allCalendars;
    }
  }

  // Club calendar
  var clubCalendar = {
    events: facebookEvents,
    color: "#fa6900"
  };

  // Men calendars
  var menCalendars = {
    googleCalendarId: 'c18un05f0m1o7kvi58nb863cdduotbdi@import.calendar.google.com',
    color: "#00994c"
  };

  // Touch calendars
  var touchCalendars = {
    googleCalendarId: 'rqvfi5889grtqnojljp600serk@group.calendar.google.com',	  
    color: "#ce0000"
  };

  // Women calendars
  var womenCalendars = {
    googleCalendarId: '8nj23co4raufc6eti6db8ujj7vb4ke3v@import.calendar.google.com',
    color: "purple"
  };

  // School calendars
  var schoolCalendars = {
    googleCalendarId: 'rugbyschool@brusselsceltic.com',
    color: "#3a87ad"
  };

  // All calendars
  var allCalendars = [clubCalendar, menCalendars, touchCalendars, womenCalendars, schoolCalendars];

  calendarChosen = chooseCalendar();

  $('#calendar').fullCalendar({
    // important!
    googleCalendarApiKey: 'AIzaSyD3jRcW77Y10CYpCXWLdC6WJrmCT5GXyH4',
    eventSources: calendarChosen,

    // Customisation fullCalendar
    firstDay: 1,
    eventRender: function(event, element) {
      event.start.timeZone = "Europe/Brussels";
      event.end.timeZone = "Europe/Brussels";
      var textToShow = " : " + event.start.format('HH:mm');
      /* Women calendars on Teamer have fake end times so excluded
      from end times formatting below */
      if (event.end && event.source.googleCalendarId != womenCalendars.googleCalendarId) {
	textToShow = textToShow.concat(' - ' + event.end.format('HH:mm'));
      }
      element.tooltip({
	title: event.title + textToShow,
	/* Setting container makes the tooltip display on top of other
	elements/overlapping divs */
	container: 'body'
      });
    },
    timezone: "Europe/Brussels",
    header: {
      left: "agendaWeek basicWeek month",
      center: "title",
      right: 'today prev,next',
    },
    views: {
      basic: {
	// options apply to basicWeek and basicDay views
      },
      agenda: {
	// options apply to agendaWeek and agendaDay views
      },
      week: {
	// options apply to basicWeek and agendaWeek views
      },
      day: {
	// options apply to basicDay and agendaDay views
      },
      month: {
	buttonText: "Month",
	timeFormat: "H:mm",
	displayEventEnd: false,
      },
      basicWeek: {
	buttonText: "Week",
	timeFormat: "H:mm",
	displayEventEnd: true,
      },
      agendaWeek: {
	buttonText: "Agenda",
	timeFormat: "H:mm",
	displayEventEnd: true,

      },
    },
  });

  $(".rotation").tooltip({
    title: "Rotation every 2 weeks"
  });
});
