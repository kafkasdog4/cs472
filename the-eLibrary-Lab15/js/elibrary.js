$( function() {
    "use strict";

    getBooks();

    function getBooks() {
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then( response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return Promise.reject({ status: response.status, statusText: response.statusText });
            }
        })
        .then(books => {
            let content = "";
            if (books.length > 0) {
                books.forEach(function(book, i) {
                    content += `
                        <tr>
                            <th scope="row">${i+1}.</th>
                            <td>${book.isbn}</td>
                            <td>${book.title}</td>
                            <td>${book.overdueFee}</td>
                            <td>${book.publisher}</td>
                            <td>${book.datePublished}</td>
                        </tr>
                    `
                });
            }
            else {
                content += `
                    <tr>
                        <td style="text-align: center;" colspan="9">No books found</td>
                    </tr>
                    `;
            }
            $("#book_list").html(content);
        })
        .catch(err => {
            const tbodyErrMsg = `<tr>
                <td style="text-align: center;" colspan="9"><p style='color:#ff0000;'>
                We are sorry. The book list service is unavailable. Please try again later.</p></td>
                </tr>`;
            $("#book_list").html(tbodyErrMsg);
            console.log("Error message:", err);        
        });
    }

    $(".add-new-book-button").each(function() {
        $(this).click(function(evt) {
            evt.preventDefault();
            $("#list_container").hide();
            $("#msg_and_nav_container").hide();
            $("#form_container").show();
        })
    })

    $("#return_book_list").click(function(evt) {
        evt.preventDefault();
        $("#form_container").hide();
        $("#msg_and_nav_container").hide();
        $("#list_container").show();
    })

    $("#new_book_form").submit(function(evt) {
        evt.preventDefault();
        const bookId = Math.floor(Math.random() * 1000000);
        const isbn = $("#isbn").val();
        const bookTitle = $("#book_title").val();
        const overdueFee = $("#overdue_fee").val();
        const publisher = $("#publisher").val();
        const publishedDate = $("#published_date").val();

        const bookData = {
            "bookId": bookId,
            "isbn": isbn,
            "title":bookTitle,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": publishedDate
        }
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "post",
            body: JSON.stringify(bookData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => { return {"status": "ok"};})
        .then(function() {
            $("#form_reset_button").click();
            $("#form_container").hide();
            $("#msg_display").html(`You've submitted the book ${bookTitle}.`);
            $("#msg_and_nav_container").show();
        })
        .catch(function(err) {
            console.log(err);
        });        
    })
})