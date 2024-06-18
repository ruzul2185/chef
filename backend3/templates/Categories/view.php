<section class="content-header">
  <h1>
    Category
    <small><?php echo __('View'); ?></small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="<?php echo $this->Url->build(['action' => 'index']); ?>"><i class="fa fa-dashboard"></i> <?php echo __('Home'); ?></a></li>
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
            <dd><?= h($category->name) ?></dd>
            <dt scope="row"><?= __('Parent Name') ?></dt>
            <dd><?= h($category->parent_name) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($category->id) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h($category->created) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h($category->modified) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Products') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($category->products)): ?>
          <table class="table table-hover">
              <tr>
                    <th scope="col"><?= __('Id') ?></th>
                    <th scope="col"><?= __('Name') ?></th>
                    <th scope="col"><?= __('Original Price') ?></th>
                    <th scope="col"><?= __('Offer Price') ?></th>
                    <th scope="col"><?= __('Discount') ?></th>
                    <th scope="col"><?= __('Desc') ?></th>
                    <th scope="col"><?= __('Created') ?></th>
                    <th scope="col"><?= __('Modified') ?></th>
                    <th scope="col"><?= __('Category Id') ?></th>
                    <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($category->products as $products): ?>
              <tr>
                    <td><?= h($products->id) ?></td>
                    <td><?= h($products->name) ?></td>
                    <td><?= h($products->original_price) ?></td>
                    <td><?= h($products->offer_price) ?></td>
                    <td><?= h($products->discount) ?></td>
                    <td><?= h($products->desc) ?></td>
                    <td><?= h($products->created) ?></td>
                    <td><?= h($products->modified) ?></td>
                    <td><?= h($products->category_id) ?></td>
                      <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['controller' => 'Products', 'action' => 'view', $products->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['controller' => 'Products', 'action' => 'edit', $products->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['controller' => 'Products', 'action' => 'delete', $products->id], ['confirm' => __('Are you sure you want to delete # {0}?', $products->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
