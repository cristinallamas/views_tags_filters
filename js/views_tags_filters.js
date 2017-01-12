(function ($) {

  /**
   * Set active class on Views AJAX filter
   * on selected category
   */
  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {
      $('.filter-tab a').on('click', function(e) {
        e.preventDefault();

        // Get ID of clicked item
        var id = $(e.target).attr('id');

        // Set the new value in the SELECT element
        // Todo change this id to a more configurable value.
        var filter = $('#views-exposed-form-gallery-page-1 select[name="field_gallery_type_target_id"]');
        filter.val(id);

        // Unset and then set the active class
        $('.filter-tab a').removeClass('active');
        $(e.target).addClass('active');

        // Do it! Trigger the select box
        //filter.trigger('change');
        $('#views-exposed-form-gallery-page-1 select[name="field_gallery_type_target_id"]').trigger('change');
        $('#views-exposed-form-gallery-page-1 input.form-submit').trigger('click');

      });
    }
  };


  jQuery(document).ajaxComplete(function(event, xhr, settings) {
    switch(settings.extraData.view_name){

      case "gallery":
        var filter_id = $('#views-exposed-form-gallery-page-1 select[name="field_gallery_type_target_id"]').find(":selected").val();

        $('.filter-tab a').removeClass('active');
        $('.filter-tab').find('#' + filter_id).addClass('active');

        break;

      default:
        break;
    };
  });


})(jQuery);
