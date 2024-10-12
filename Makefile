# https://www.drupal.org/docs/getting-started/installing-drupal/drupal-quick-start-command

start:
	php -d memory_limit=1024M web/core/scripts/drupal quick-start  recipes/sdc_session --site-name 'SDC Testarea' -vvv

help:
	php web/core/scripts/drupal quick-start --help

cex:
	./vendor/bin/drush dcer node  --folder=recipes/sdc_session/content