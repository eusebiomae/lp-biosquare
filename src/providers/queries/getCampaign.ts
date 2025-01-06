const getCampaign = (campaign: string) =>
  decodeURIComponent(
    (new RegExp(
      '[?|&]' + campaign + '=' + '([^&;]+?)(&|#|;|$)',
    ).exec(location.search) || [null, ''])[1].replace(
      /\+/g,
      '%20',
    ),
  ) || null;

export default getCampaign;
