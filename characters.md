<p>Character count: {{ site.characters | size }}</p>

{% for character in site.characters %}
  <p>{{ character.name }}</p>
{% endfor %}
