# https://www.drupal.org/docs/getting-started/installing-drupal/drupal-quick-start-command

start:
	php -d memory_limit=256M web/core/scripts/drupal quick-start  recipes/sdc_session --site-name 'SDC Testarea'

help:
	php web/core/scripts/drupal quick-start --help