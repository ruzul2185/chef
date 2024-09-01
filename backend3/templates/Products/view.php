<?php

use Cake\I18n\Time;
?>
<section class="content-header">
  <h1>
    Product
    <small><?php echo __('View'); ?></small>
  </h1>
  <ol class="breadcrumb">
    <!-- Home breadcrumb item -->
    <li>
      <a href="<?php echo $this->Url->build(['action' => 'index']); ?>">
        <i class="fa fa-dashboard"></i> <?php echo __('Home'); ?>
      </a>
    </li>
    <!-- New Image link on the right -->
    <li class="pull-right">
      <a href="<?php echo $this->Url->build('/images/add'); ?>?product_id=<?php echo $product->id; ?>" id="newImageLink" class="btn btn-primary" style="color: white;">
        <i class="fa fa-circle-o"></i> New Image
      </a>
    </li>
  </ol>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-info"></i>
          <h3 class="box-title"><?php echo __('Information'); ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <dl class="dl-horizontal">
            <dt scope="row"><?= __('Name') ?></dt>
            <dd><?= h($product->name) ?></dd>
            <dt scope="row"><?= __('Category') ?></dt>
            <dd><?= $product->has('category') ? $this->Html->link($product->category->name, ['controller' => 'Categories', 'action' => 'view', $product->category->id]) : '' ?></dd>
            <dt scope="row"><?= __('Company') ?></dt>
            <dd><?= $product->has('company') ? $this->Html->link($product->company->name, ['controller' => 'Companies', 'action' => 'view', $product->company->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($product->id) ?></dd>
            <dt scope="row"><?= __('Original Price') ?></dt>
            <dd><?= $this->Number->format($product->original_price) ?></dd>
            <dt scope="row"><?= __('Offer Price') ?></dt>
            <dd><?= $this->Number->format($product->offer_price) ?></dd>
            <dt scope="row"><?= __('Discount') ?></dt>
            <dd><?= $this->Number->format($product->discount) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h(Time::parse($product->created)->timezone('Asia/Kolkata')->i18nFormat('dd-MMM-yyyy hh:mm a')) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h(Time::parse($product->modified)->timezone('Asia/Kolkata')->i18nFormat('dd-MMM-yyyy hh:mm a')) ?></dd>

          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-text-width"></i>
          <h3 class="box-title"><?= __('Description') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?= $this->Text->autoParagraph($product->description); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Images') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($product->images)): ?>
            <table class="table table-hover">
              <tr>
                <th scope="col"><?= __('Id') ?></th>
                <th scope="col"><?= __('Name') ?></th>
                <th scope="col"><?= __('Url') ?></th>
                <th scope="col"><?= __('Product Id') ?></th>
                <th scope="col"><?= __('Review Id') ?></th>
                <th scope="col"><?= __('Image Type Id') ?></th>
                <th scope="col"><?= __('Created') ?></th>
                <th scope="col"><?= __('Modified') ?></th>
                <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($product->images as $images): ?>
                <tr>
                  <td><?= h($images->id) ?></td>
                  <td><?= h($images->name) ?></td>
                  <td><?= h($images->url) ?></td>
                  <td><?= h($images->product_id) ?></td>
                  <td><?= h($images->review_id) ?></td>
                  <td><?= h($images->image_type_id) ?></td>
                  <td><?= h(Time::parse($images->created)->timezone('Asia/Kolkata')->i18nFormat('dd-MMM-yyyy hh:mm a')) ?></td>
                  <td><?= h(Time::parse($images->modified)->timezone('Asia/Kolkata')->i18nFormat('dd-MMM-yyyy hh:mm a')) ?></td>

                  <td class="actions text-right">
                    <?= $this->Html->link(__('View'), ['controller' => 'Images', 'action' => 'view', $images->id], ['class' => 'btn btn-info btn-xs']) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'Images', 'action' => 'edit', $images->id], ['class' => 'btn btn-warning btn-xs']) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'Images', 'action' => 'delete', $images->id], ['confirm' => __('Are you sure you want to delete # {0}?', $images->id), 'class' => 'btn btn-danger btn-xs']) ?>
                  </td>
                </tr>
              <?php endforeach; ?>
            </table>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>