from django import forms
forms .models import Tweet

class TweetForm(forms.ModelForm):
    class Meta:
        model=Tweet
        fields=['text', 'photo']