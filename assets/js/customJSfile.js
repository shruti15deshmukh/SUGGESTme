$("#write-suggestion").submit(function (e) {
    alert("Suggestion inserted successfully!");

})

$("#add_suggestion").submit(function(e) {
    e.preventDefault(); // prevents reloading of browser
    
    var allDataviaSubmittedForm=$("#add_suggestion").serializeArray();
    // var allDataviaSubmittedForm=$(this)
    var data={}
    $.map(allDataviaSubmittedForm,function(n,i){
        data[n['name']]=n['value'];
       

    })
    var request={
        "url":`http://localhost:3000/api/Suggestions/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data updated successfully!");})
})