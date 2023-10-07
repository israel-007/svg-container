const svg = {
    
    initiate: function () {
        
        fetch('svg/icons.json')
            .then(response => response.json())
            .then(iconMappings => {
                
                document.querySelectorAll('i[svg]').forEach(iElement => {
                    
                    var iAttributes = iElement.attributes;

                    var iconName = iElement.getAttribute('svg');

                    if (iconMappings[iconName]) {

                        iElement.innerHTML = iconMappings[iconName];

                        for (var i = 0; i < iAttributes.length; i++) {

                            var attributeName = iAttributes[i].name;

                            if (attributeName.startsWith('svg-')) {

                                var attributeValue = iAttributes[i].value;

                                var attributeSiffix = attributeName.replace('svg-', '');

                                var svgElement = iElement.querySelector('svg');

                                svgElement.setAttribute(attributeSiffix, attributeValue);

                            }
                        
                        }

                    }

                });
            })
            .catch(error => {
                console.error("Error loading icons:", error);
            });
    },

    count: function () {

        var count = 0;

        document.querySelectorAll('i[svg]').forEach(iElement => {

            count = count+1;

        });

        console.log(count);

        return count;
    }

};

document.addEventListener('DOMContentLoaded', function () {
    svg.initiate();
});
