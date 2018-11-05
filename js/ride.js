/*global WildRydes _config*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function rideScopeWrapper($) {
    var authToken;
    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });

    function setUserInfo() {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/setuserdata',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                score: currentScore
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error posting info: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when posting your info:\n' + jqXHR.responseText);
            }
        });
    }

    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: 'https://i1t97jg2u6.execute-api.us-east-2.amazonaws.com/prod/getuserdata', // CORRECT URL
            headers: {
                Authorization: authToken // SHOULD'VE ADDED THIS
            },
            success: function (data) {
                table = data.data.Items;
                sortTable();
                displayUpdate("Scores loaded from server!");
                update();
            },
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error getting info: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when getting your info:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRequest(result) {
        //console.log('Response received from API: ', result);
        getUserInfo();
    }

    // Register click handler for #request button
    $(function onDocReady() {
        getUserInfo();
        $('#request').click(handleRequestClick);
        $('#signOut').click(function () {
            WildRydes.signOut();
            alert("You have been signed out.");
            window.location = "signin.html";
        });

        WildRydes.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                $('.authToken').text(token);
            }
        });

        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });

    function handleRequestClick(event) {
        event.preventDefault();
        setUserInfo();
        displayUpdate("Score saved!");
    }

    function displayUpdate(text) {
        $("#updates").empty();
        $('#updates').append($('<li>' + text + '</li>'));
    }

    function sortTable() {

        var newTable = []
        function compare(a, b) {
            if (a.Score < b.Score)
                return 1;
            if (a.Score > b.Score)
                return -1;
            return 0;
        }
        table.sort(compare);
        for (var i = 0; i < 10; i++) {
            newTable.push(table[i]);
        }
        table = newTable;
        
    }
}(jQuery));