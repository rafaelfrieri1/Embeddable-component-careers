function setOrganizationCode(organizationCode) {
    const element = document.getElementById("career-page")
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://search.torre.co/opportunities/_search?size=100", false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      organization: {
        code: organizationCode
      }
    }))
    const result = JSON.parse(xhr.response)
    let elementHTML = '<ul class="job-list">';

    result.results.forEach((opportunity) => {
      const opportunityCompensation = opportunity.compensation?.data;
      const opportunityId = opportunity.id
      const opportunityRemote = opportunity.remote
      const opportunityLocations = opportunity.locations

      elementHTML += '<li class="job-list__item">'
      elementHTML += `<a href="https://torre.co/post/${opportunityId}" class="job-list__item--title">${opportunity.objective}</a><br/>`

      if (opportunityCompensation && opportunityCompensation.code === "fixed") {
        elementHTML += `<span class="job-list__item--compensation">${opportunityCompensation.currency}${opportunityCompensation.minAmount}/${opportunityCompensation.periodicity}</span><br/>`
      } else if (opportunityCompensation && opportunityCompensation.code === "range") {
        elementHTML += `<span class="job-list__item--compensation">${opportunityCompensation.currency}${opportunityCompensation.minAmount} - ${opportunityCompensation.maxAmount}/${opportunityCompensation.periodicity}</span><br/>`
      }

      if (opportunityRemote && opportunityLocations.length == 0) {
        elementHTML += `<span class="job-list__item--location">Remote</span><br/>`
      } else if (opportunityLocations.length > 0) {
        elementHTML += `<span class="job-list__item--location">${opportunityLocations[0]}</span><br/>`
      } else {
        elementHTML += `<span class="job-list__item--location">Unknown</span><br/>`
      }

      elementHTML += `<a href="https://torre.co/post/${opportunityId}" class="job-list__item--CTA">View Job</a>`
      elementHTML += '</li>'
    })

    elementHTML += '</ul>'
    element.innerHTML = elementHTML
    return;
}