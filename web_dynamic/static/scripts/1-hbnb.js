#!/usr/bin/node

// Wait for the DOM to be loaded
$(document).ready(function () {
    // Create an empty object to store the checked amenities
    let checkedAmenities = {};
    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
      // Get the data-id and data-name attributes of the checkbox
      let amenityId = $(this).attr('data-id');
      let amenityName = $(this).attr('data-name');
      // If the checkbox is checked, add the amenity to the object
      if ($(this).is(':checked')) {
        checkedAmenities[amenityId] = amenityName;
      } else {
        // If the checkbox is unchecked, delete the amenity from the object
        delete checkedAmenities[amenityId];
      }
      // Update the h4 tag inside the div Amenities with the list of amenities checked
      let amenitiesList = Object.values(checkedAmenities).join(', ');
      $('.amenities h4').text(amenitiesList);
    });
  });
