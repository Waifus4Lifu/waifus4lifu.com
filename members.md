---
title: Members
hide_title: true
feature_text: |
  Meet the degenerate nerds
# feature_image: "https://unsplash.it/1300/400?image=1061"
excerpt: "Meet the degenerate nerds"
# aside: true
---

{% for member in site.data.members %}
  {{ member.name }}
{% endfor %}
