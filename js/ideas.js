//add this to html as template
<div data-bind="template: 'locationsTemplate'"></div>

<script id="locationsTemplate" type="text/html">
  <ul>
    {{each(index, location) locations}}
      <li>${ location.name }</li>
    {{/each}}
  </ul>
</script>
//this script text returns a location name and in the above script, creates a li for each item in the locations observableArray below
<script type="text/javascript">
  function location(name){
    return{
      name : ko.observable(name)
    };
  }

  var viewModel = {
  locationAddress : ko.observable(" "),
  locationCity : ko.observable(" "),
  locationState : ko.observable( " "),
  locationZip : ko.observable(" "),
  locations : ko.observableArray([new location("Chipotle"), new location "Qdoba")])
  };
  viewModel.fullAddress = ko.dependentObservable(function () {
    return this.locationAddress() + " " + this.locationCity();
    }, viewModel);

    ko.applyBindings(viewModel);
</script>


}
