new Vue({    
    el: '#recipes',    
    ready:function(){
    this.fetchRecipes();
},
    data: {
        recipes : []
//        for testing purposes
//        recipes : [{"post_title":"Meatballs", "recipe_type":"Meat"},{"post_title":"Cheesecake", "recipe_type":"Dairy"},{"post_title":"Stir-Fry", "recipe_type":"Pareve"},{"post_title":"Onion soup", "recipe_type":"Dairy and Pareve"},{"post_title":"Vegetable soup", "recipe_type":"Meat and Pareve"}]
    },
        methods:{
        fetchRecipes:function(){
            this.$http.get('https://orthodox:union@es.content-index.oustatic.com:8443/rsstage_oukosher_org/_search?q=post_type:recipes',
                function(data){
                this.$set('recipes', data.hits.hits)
            }).error(function(status){
                //handle error
                console.log(status);
            }); 
        }
    }
});