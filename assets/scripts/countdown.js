var nextYear = moment.tz("2017-08-23 12:00", "America/Chicago");

$('#clock').countdown(nextYear.toDate(), function(event) {
  $(this).html(event.strftime('%-dd %-Hh %-Mm %-Ss'));
});
