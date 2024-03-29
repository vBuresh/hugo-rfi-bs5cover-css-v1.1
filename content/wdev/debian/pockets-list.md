+++
title = "Список .deb пакетов - Pockets List"
date = "2020-06-11T11:19:27+03:00"
draft = false
toc = true
pygmentsUseClasses = true
navvvPravo = true
#summary="Управление содержимым - важнейшая задача на всех этапах создания, развития и поддержки сайта"
#description="Page_description"
#summaryImage="/images/vvv-1920x864.jpg"
tags = ["Hugo", "webdev"]
+++

Я люблю устанавливать и пытаться сразу применять в деле новые программы. Признаюсь, как и многие русские мануалы читаю "когда приспичит". не читаю Доставляет наслаждение ощутить что-то новое, разумное, применить новые возможности в своей практике. Приятно также разделить радость разработчиков, что найдены интересные решения. В результате установленных пакетов собирается много. Ярлыки неиспользуемых приложений годами "висят" в перечне. Их хоть видно и можно удалить. Хуже с пакетами для терминала. Из не увидеть "невооруженным глазом". Поэтому уметь вывести исчерпывающий список установленных пакетов важно. За такими размышлениями и родился постик 

/post/hitech/linux/pockets-list.md


`curl -sL https://deb.nodesource.com/setup_14.x | bash -`

[Список установленных пакетов Debian](https://losst.ru/spisok-ustanovlennyh-paketov-debian)

`dpkg --get-selections | grep -v deinstall`

Полученный список можно сохранить в файл, для дальнейшего использования:

`dpkg --get-selections | grep -v deinstall > /home/w/wBuresh/repo-del/20200611_gpkg-list.txt`

Чтобы убрать лишнюю информацию и сохранить список только имен пакетов:

`dpkg -l | grep ^ii | awk '{ print $2}' > 20200611_gpkg-list-0.txt`

Вариант для `apt`

`apt list --installed`

Чтобы отфильтровать и вывести только пакеты, имена, которых содержат определенные символы:

`apt list --installed | grep node`

Важная информация: какие пакеты были установлены вручную. Для этого наберите:

`apt-mark showmanual`

Вариант для `apt`:

`apt-cache pkgnames`

Утилита для управления пакетами `aptitude` тоже позволяет вывести список установленных пакетов:

`aptitude search '~i!~M'`

Нелишне напомнить, что исчерпывающий список установленных пакетов содержит файл /var/lib/apt/extended_states (база данных установленных пакетов debian)

`cat /var/lib/apt/extended_states`

Восстановление списка установленных пакетов

Сохранные списки установленных пакетов дают возможность не только смотреть и перечни по состоянию на определенное время, но и для восстановления  при необходимости. Если список сформирован с помощью dpkg, то его можно восстановить в системе с помощью команды:

```bash
sudo dpkg --clear-selections
$ sudo dpkg --set-selections < 20200611_gpkg-list.txt
```

Установить пакеты после добавления их в список можно командой:

`sudo apt dselect-upgrade`

Если сохранен лишь список имен пакетов, то для восстановления достаточно передать имена команде `apt` для установки:

`xargs < 20200611_gpkg-list-0.txt apt install -y`