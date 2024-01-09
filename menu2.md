@def title = "Let's Connect🤝"
+++
title = "More goodies"
hascode = true
rss = "A short description of the page which would serve as **blurb** in a `RSS` feed; you can use basic markdown here but the whole description string must be a single line (not a multiline string). Like this one for instance. Keep in mind that styling is minimal in RSS so for instance don't expect maths or fancy styling to work; images should be ok though: ![](https://upload.wikimedia.org/wikipedia/en/b/b0/Rick_and_Morty_characters.jpg)"
rss_title = "More goodies"
rss_pubdate = Date(2019, 5, 1)

tags = ["syntax", "code", "image"]
+++
## Get in Touch
I'm still building my portfolio but if there's anything that catches your interest here please let me know.

* Website: 🌐

* Email: jaswant.pendem@gmail.com / jaswant.pendem@curtin.edu.au 📧

* For Whatsapp/Telegram, you can reach me at the same number as my phone.📱

* My phone number is: redacted 📞

* If there’s a problem with my code, I encourage you to post an issue on the appropriate repository on my [GitHub](/https://github.com/jaswantgh//).😊

* Let's connect on [LinkedIn](/https://www.linkedin.com/in/jaswantpendem//)🤝

* Buy Me a Coffee ☕ [HERE]()

🙏I kindly request that you refrain from calling unless it’s of urgent nature. For inquiries, an email would be preferred and I assure you of a prompt response.

## References

\newcommand{\card}[5]{
  @@card
    ![#1](/assets/img/team/!#2.jpg)
    @@container
      ~~~
      <h2>#1</h2>
      ~~~
      @@title #3 @@
      @@vitae #4 @@
      @@email #5 @@
      ~~~
      <p><button class="button">Contact</button></p>
      ~~~
    @@
  @@
}


```julia:teamcards
#hideall
team = [
  (name="H Doe", pic="beth", title="CEO & Founder", vitae="Phasellus eget enim eu lectus faucibus vestibulum", email="example@example.com"),
  (name="Mike Ross", pic="rick", title="Art Director", vitae="Phasellus eget enim eu lectus faucibus vestibulum", email="example@example.com"),
  (name="Hoa V.Nguyen", pic="meseeks", title="Designer", vitae="Phasellus eget enim eu lectus faucibus vestibulum", email="example@example.com")
  ]

"@@cards @@row" |> println
for person in team
  """
  @@column
    \\card{$(person.name)}{$(person.pic)}{$(person.title)}{$(person.vitae)}{$(person.email)}
  @@
  """ |> println
end
println("@@ @@") # end of cards + row
```

\textoutput{teamcards}


## Hobby




# YouTube
* Subscirbe to JazzyTV to watch Tutorials.
* Subscribe to JazzymentGamer my Gaming, Vlogs, Lifestyle Channel.

